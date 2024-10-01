// schema.ts
import { sql } from "drizzle-orm";
import {
  pgTableCreator,
} from "drizzle-orm/pg-core";
import { tickets } from './tickets';

export const createTable = pgTableCreator((name) => `${name}`);

export { tickets };
