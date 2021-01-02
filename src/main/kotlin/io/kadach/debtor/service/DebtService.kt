package io.kadach.debtor.service

import io.kadach.debtor.model.Debt

interface DebtService {

    fun findAll(): List<Debt>

    fun save(debt: Debt)

}