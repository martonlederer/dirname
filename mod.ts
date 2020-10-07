import { IMakeLoc, IMeta } from './types.ts'
import { join } from 'https://x.nest.land/std@0.73.0/path/mod.ts'

// make a __dirname object
export default function (meta: IMeta): IMakeLoc {
  const 
    iURL = meta.url,
    fileStartRegex = /(^(file:)((\/\/)?))/,
    __dirname = join(iURL, '../')
                  .replace(fileStartRegex, '')
                  .replace(/(\/$)/, ''),
    __filename = iURL.replace(fileStartRegex, '')

  return { __dirname, __filename }
}