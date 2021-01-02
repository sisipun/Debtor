package io.kadach.debtor.controller

import io.kadach.debtor.model.Debt
import io.kadach.debtor.service.DebtService
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("/debts")
class DebtController(
        private val service: DebtService
) {

    @GetMapping
    fun findAll(): List<Debt> = service.findAll()

    @PostMapping
    fun save(@RequestBody debt: Debt) = service.save(debt)

}