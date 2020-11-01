import akka.actor.typed.scaladsl.Behaviors
import akka.actor.typed.{ActorSystem, Behavior}
import akka.http.scaladsl.Http

object DebtorApp extends App {
  implicit val system = ActorSystem(Behaviors.empty, "debtor-system")
  implicit val executionContext = system.executionContext

  val bindingFuture = Http().newServerAt("localhost", 8080).bind(DebtorRoute.route)
}
