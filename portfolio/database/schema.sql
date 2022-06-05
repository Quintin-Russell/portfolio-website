drop schema "public" cascade;
create schema "public";
CREATE TABLE "projects" (
	"projectId" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"imgUrl" TEXT NOT NULL UNIQUE,
	"tech" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"summary" TEXT NOT NULL,
	"githubLink" TEXT NOT NULL,
	"liveLink" TEXT NOT NULL,
	"added" timestamptz NOT NULL default now(),
	CONSTRAINT "Projects_pk" PRIMARY KEY ("projectId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "contact" (
	"contactId" serial NOT NULL,
	"contactName" TEXT NOT NULL,
	"company" TEXT,
	"email" TEXT NOT NULL,
	"linkedInUrl" TEXT,
	"phoneNumber" TEXT,
	"message" TEXT NOT NULL,
	"added" timestamptz NOT NULL default now(),
	CONSTRAINT "Contact_pk" PRIMARY KEY ("contactId")
) WITH (
  OIDS=FALSE
);
