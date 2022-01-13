import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('useFetch tests', () => {
    test('it should return info by default', () => {
        const { result } = renderHook(()=>useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const { data, loading, error } = result.current; 

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test('it should have the expected data, loading false and error null', async() => {
        const { result, waitForNextUpdate } = renderHook(()=>useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate({timeout:4000});
        
        const { data, loading, error } = result.current; 

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });
    
    test('it should catch error', async() => {
        const { result, waitForNextUpdate } = renderHook(()=>useFetch('https://reqres.in/apixzcxzvz/users?page=2'));
        await waitForNextUpdate({timeout:4000});
        console.log(result.current)
        const { data, loading, error } = result.current; 

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('We can not retrieve the info.')

    });    
})

