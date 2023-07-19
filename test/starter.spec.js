import test from 'ava'

import { sum } from '../src/sum.js'

test('should pass the first starter test', t => {
  t.is(sum(1, 2), 3)
})
