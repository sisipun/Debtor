package io.kadach.debtor.model

import java.math.BigDecimal
import java.time.LocalDate

data class Debt(
        val debtor: String,
        val value: BigDecimal,
        val currency: String,
        val debtDate: LocalDate,
        val repaymentDate: LocalDate
)