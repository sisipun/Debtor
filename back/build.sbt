name := "Debtor"

version := "0.1"

scalaVersion := "2.13.3"

val AkkaVersion = "2.6.8"
val AkkaHttpVersion = "10.2.1"
val AkkaCorsVersion = "1.1.0"

libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-actor-typed" % AkkaVersion,
  "com.typesafe.akka" %% "akka-stream" % AkkaVersion,
  "com.typesafe.akka" %% "akka-http" % AkkaHttpVersion,
  "com.typesafe.akka" %% "akka-http-spray-json" % AkkaHttpVersion,
  "ch.megard" %% "akka-http-cors" % AkkaCorsVersion,
  "ch.qos.logback" % "logback-classic" % "1.1.3" % Runtime
)
