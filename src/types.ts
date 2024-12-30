import type { PDFOptions, Page } from 'gm-export-pdfs-core'

export type PageType = Omit<Page, 'title'>
export type UserSorter = (a: PageType, b: PageType) => number

/**
 * defined user config
 */
export interface UserConfig {
  sorter?: UserSorter
  puppeteerLaunchOptions?: any
  routePatterns?: string[]
  pdfOptions?: PDFOptions
  outFile?: string
  outDir?: string
  pdfOutlines?: boolean
  urlOrigin?: string
  outlineContainerSelector?: string
}
