/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Empresas" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Empresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "role" VARCHAR(10) NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispositivos" (
    "id" SERIAL NOT NULL,
    "dispositivo" VARCHAR(200) NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "estado" VARCHAR(20) NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "Dispositivos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Canciones" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(200) NOT NULL,
    "urlCancion" VARCHAR(200) NOT NULL,
    "subidoPorId" INTEGER NOT NULL,

    CONSTRAINT "Canciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Musica" (
    "id" SERIAL NOT NULL,
    "empresaId" INTEGER NOT NULL,
    "cancionId" INTEGER NOT NULL,
    "asignadoPorId" INTEGER NOT NULL,

    CONSTRAINT "Musica_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Dispositivos_dispositivo_key" ON "Dispositivos"("dispositivo");

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispositivos" ADD CONSTRAINT "Dispositivos_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Canciones" ADD CONSTRAINT "Canciones_subidoPorId_fkey" FOREIGN KEY ("subidoPorId") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Musica" ADD CONSTRAINT "Musica_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Musica" ADD CONSTRAINT "Musica_cancionId_fkey" FOREIGN KEY ("cancionId") REFERENCES "Canciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Musica" ADD CONSTRAINT "Musica_asignadoPorId_fkey" FOREIGN KEY ("asignadoPorId") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
