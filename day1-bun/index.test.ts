import { describe, expect, test, beforeAll } from 'bun:test';

beforeAll(() => {

});

describe('math', () => {
    test('addition', () => {
        expect(2 + 2).toEqual(4)
    })
})