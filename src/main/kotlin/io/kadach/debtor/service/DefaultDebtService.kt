package io.kadach.debtor.service

import io.kadach.debtor.model.Debt
import org.springframework.stereotype.Service

@Service
class DefaultDebtService(
        private val debts: MutableList<Debt> = mutableListOf()
) : DebtService {

    override fun findAll(): List<Debt> = debts

    override fun save(debt: Debt) {
        debts.add(debt)
    }
}