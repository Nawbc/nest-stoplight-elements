import { INestApplication } from '@nestjs/common';
import type { OpenAPIObject } from '@nestjs/swagger';

export interface StoplightElementsOptions {}

/**
 *
 * @example
 * ```
 * StoplightElementsModule.setup('/docs',app, xxxDoc, {
 *
 *
 * })
 *
 * ```
 */
export class StoplightElementsModule {
  public static async setup(
    path: string,
    app: INestApplication,
    document: OpenAPIObject,
    options?: StoplightElementsOptions,
  ) {}
}
