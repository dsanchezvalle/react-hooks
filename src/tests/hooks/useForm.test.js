import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('useForm tests', () => {
    const initialForm = {
        name: 'David    ',
        email: 'dsanva@gmail.com'
    }

    test('it should return default form values', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const [ values, handleInputChange, reset ] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('it should change form values (Name)', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange, ] = result.current;
        const mockEvent = {
            target:{
                name: 'name',
                value: 'NewName'
            }
        }
        //console.log(result.current) 
        act(()=>{
            handleInputChange(mockEvent)
        });
        const [values, , ] = result.current;

        expect(values).toEqual({
            ...initialForm,
            name: 'NewName' 
        });
    });

    test('it should reset the form', () => {
        const { result } = renderHook( () => useForm(initialForm))
        const [ , handleInputChange, reset] = result.current;
        
        const mockEvent = {
            target:{
                name: 'name',
                value: 'NewName'
            }
        }
        
        act(()=>{
            handleInputChange(mockEvent);
            reset();
        });
        const [values, , ] = result.current;
        expect(values).toEqual(initialForm);
    });  
    
})
