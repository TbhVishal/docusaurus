/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {describe, it, expect} from 'vitest';
import {loadMermaid} from '../loadMermaid';

describe('loadMermaid', () => {
  it('loads mermaid and resolves successfully', async () => {
    const mermaid = await loadMermaid();
    expect(mermaid).toBeDefined();
    expect(typeof mermaid.render).toBe('function');
  });
});
