import java.time.LocalDate
import java.time.format.DateTimeFormatter

import DebtorStorage.{Debt, Debts, GetDebts}
import akka.actor.typed.scaladsl.AskPattern._
import akka.actor.typed.{ActorRef, ActorSystem}
import akka.http.scaladsl.Http
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives.{as, complete, entity, get, options, path, post}
import akka.http.scaladsl.server.{Directives, Route}
import akka.util.Timeout
import ch.megard.akka.http.cors.scaladsl.CorsDirectives.cors
import spray.json.DefaultJsonProtocol._
import spray.json.{JsString, JsValue, JsonFormat, RootJsonFormat}

import scala.concurrent.duration.DurationInt
import scala.concurrent.{ExecutionContextExecutor, Future}

object DebtorApp {

  implicit val localDateFormat: JsonFormat[LocalDate] = new JsonFormat[LocalDate] {
    private val iso_date = DateTimeFormatter.ISO_DATE

    def write(date: LocalDate): JsValue = JsString(iso_date.format(date))

    def read(value: JsValue): LocalDate = value match {
      case JsString(date) => LocalDate.parse(date, iso_date)
      case date => throw new RuntimeException(s"Unexpected type ${date.getClass.getName} when trying to parse LocalDate")
    }
  }

  implicit val debtFormat: RootJsonFormat[Debt] = jsonFormat5(Debt)
  implicit val debtsFormat: RootJsonFormat[Debts] = jsonFormat1(Debts)

  def main(args: Array[String]): Unit = {
    implicit val system: ActorSystem[DebtorStorage.DebtorMessage] = ActorSystem(DebtorStorage.apply(), "debtor-system")
    implicit val executionContext: ExecutionContextExecutor = system.executionContext

    val debtorStorage: ActorRef[DebtorStorage.DebtorMessage] = system

    val route: Route = cors() {
      Directives.concat(
        get {
          path("debts") {
            implicit val timeout: Timeout = 5.seconds

            val debts: Future[Debts] = debtorStorage ? GetDebts
            complete(debts.map(debts => debts.debts))
          }
        },
        post {
          path("debts") {
            entity(as[Debt]) { debt =>
              system ! debt
              complete(StatusCodes.OK)
            }
          }
        },
      )
    }

    Http().newServerAt("localhost", 8080).bind(route)
  }
}