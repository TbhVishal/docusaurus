/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {Mermaid} from 'mermaid';

// We load Mermaid with a dynamic import to code split / lazy load the library.
// It is only called inside a useEffect, so loading can be deferred.
// d3-transition extends d3-selection with .transition(), which mermaid's flowchart tooltip requires.
export async function loadMermaid(): Promise<Mermaid> {
  const [mermaid] = await Promise.all([
    import('mermaid'),
    // @ts-expect-error: d3-transition side-effect import does not provide module types
    import('d3-transition'),
  ]);
  return mermaid.default;
}
