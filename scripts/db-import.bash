#!/bin/bash -e

if [ -f .env ]; then
  source .env
fi

psql $DATABASE_URL -f database/schema.sql -f database/data.sql
# -f database/patch.sql
