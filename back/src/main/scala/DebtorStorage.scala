import akka.actor.typed.scaladsl.Behaviors
import akka.actor.typed.{ActorRef, Behavior}

object DebtorStorage {

  sealed trait DebtorMessage

  final case class Debt(debtor: String, value: BigDecimal, currency: String) extends DebtorMessage
  final case class GetDebts(replyTo: ActorRef[Debts]) extends DebtorMessage

  final case class Debts(debts: List[Debt])

  def apply(): Behavior[DebtorMessage] = apply(List.empty)

  def apply(debts: List[Debt]): Behavior[DebtorMessage] = Behaviors.receiveMessage {
    case debt @ Debt(_, _, _) =>
      apply(debt :: debts)
    case GetDebts(replyTo) =>
      replyTo ! Debts(debts)
      Behaviors.same
  }

}
