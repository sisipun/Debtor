package io.kadach.debtor

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DebtorApplication

fun main(args: Array<String>) {
    runApplication<DebtorApplication>(*args)
}
