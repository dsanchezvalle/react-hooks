import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('useCounter Hook tests', () => {
    test('it should return default values', () => {
        const { result } = renderHook(() => useCounter() );
        const { counter, increment, decrement, reset } = result.current
        expect(counter).toBe(10);
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('counter value should be 100', () => {
        const { result } = renderHook(() => useCounter(100) );
        const { counter } = result.current
        expect(counter).toBe(100);
    })
    
    test('increment function should increment counter', () => {
        const { result } = renderHook(() => useCounter(100) );
        const { increment } = result.current;
        act(() => {
            increment();
        })
        const { counter } = result.current;
        expect(counter).toBe(101);
    })

    test('decrement function should decrement counter', () => {
        const { result } = renderHook(() => useCounter(100) );
        const { decrement } = result.current;
        act(() => {
            decrement();
        })
        const { counter } = result.current;
        expect(counter).toBe(99);
    })
    
    test('reset function should reset counter', () => {
        const { result } = renderHook(() => useCounter(100) );
        const { increment, reset } = result.current;
        act(() => {
            increment();
            reset();
        })
        const { counter } = result.current;
        expect(counter).toBe(100);
    })

})
