import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route

object DebtorRoute {
  val route: Route = path("hello")(
    get {
      complete(StatusCodes.OK)
    }
  )
}
