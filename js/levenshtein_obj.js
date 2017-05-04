/**
 * Based on the algorithm at http://en.wikipedia.org/wiki/Levenshtein_distance.
 */

(function() {
    'use strict';

    /*function idAt(index) {
        return this[index].ID;
    }

    Object.defineProperty(Array.prototype, 'idAt', {
        enumerable: false,
        value: idAt
    });*/


    // arrays to re-use
    const prevRow = [], str2Char = [];

    const Levenshtein = {
      /**
       * Calculate levenshtein distance of the two strings.
       *
       * @param seq1 String the first string.
       * @param seq2 String the second string.
       * @return Integer the levenshtein distance (0 and above).
       */
        get: function (seq1, seq2) {

            const seq1Len = seq1.length, seq2Len = seq2.length;

            // base cases
            if (seq1Len === 0) return seq2Len;
            if (seq2Len === 0) return seq1Len;

            // two rows
            let curCol, nextCol, i, j, tmp;

            // initialise previous row
            for (i = 0; i < seq2Len; ++i) {
                prevRow[i] = i;
                str2Char[i] = seq2[i];
            }
            prevRow[seq2Len] = seq2Len;

            let strCmp;
            // calculate current row distance from previous row
            for (i = 0; i < seq1Len; ++i) {
                nextCol = i + 1;

                for (j = 0; j < seq2Len; ++j) {
                    curCol = nextCol;

                    // substution
                    strCmp = seq1[i] === str2Char[j];

                    nextCol = prevRow[j] + (strCmp ? 0 : 1);

                    // insertion
                    tmp = curCol + 1;
                    if (nextCol > tmp) {
                        nextCol = tmp;
                    }
                    // deletion
                    tmp = prevRow[j + 1] + 1;
                    if (nextCol > tmp) {
                        nextCol = tmp;
                    }

                    // copy current col value into previous (in preparation for next iteration)
                    prevRow[j] = curCol;
                }

              // copy last col value into previous (in preparation for next iteration)
              prevRow[j] = nextCol;
            }

            return nextCol;
        }

    };

    // amd
    if (typeof define !== "undefined" && define !== null && define.amd) {
    define(function() {
      return Levenshtein;
    });
    }
    // commonjs
    else if (typeof module !== "undefined" && module !== null && typeof exports !== "undefined" && module.exports === exports) {
    module.exports = Levenshtein;
    }
    // web worker
    else if (typeof self !== "undefined" && typeof self.postMessage === 'function' && typeof self.importScripts === 'function') {
    self.Levenshtein = Levenshtein;
    }
    // browser main thread
    else if (typeof window !== "undefined" && window !== null) {
    window.Levenshtein = Levenshtein;
    }
}());

