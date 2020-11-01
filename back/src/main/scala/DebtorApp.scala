import DebtorStorage.{Debt, Debts, GetDebts}
import akka.actor.typed.scaladsl.AskPattern._
import akka.actor.typed.{ActorRef, ActorSystem}
import akka.http.scaladsl.Http
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives.{as, complete, entity, get, path, post}
import akka.http.scaladsl.server.{Directives, Route}
import akka.util.Timeout
import spray.json.DefaultJsonProtocol._
import spray.json.RootJsonFormat

import scala.concurrent.duration.DurationInt
import scala.concurrent.{ExecutionContextExecutor, Future}

object DebtorApp {

  implicit val debtFormat: RootJsonFormat[Debt] = jsonFormat3(Debt)
  implicit val debtsFormat: RootJsonFormat[Debts] = jsonFormat1(Debts)

  def main(args: Array[String]): Unit = {
    implicit val system: ActorSystem[DebtorStorage.DebtorMessage] = ActorSystem(DebtorStorage.apply, "debtor-system")
    implicit val executionContext: ExecutionContextExecutor = system.executionContext

    val debtorStorage: ActorRef[DebtorStorage.DebtorMessage] = system

    val route: Route = Directives.concat(
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
      }
    )

    val bindingFuture = Http().newServerAt("localhost", 8080).bind(route)
  }
}
