import { useState } from 'react';
import ErrorMessage from '../components/ErrorMassage';

export const withErrorApi = View => {
    return props => {
        const [errorApi, setErrorApi] = useState(false);

        return (
            <>
                {errorApi
                    ? <h1> Fail</h1>
                    : (
                        <View
                            setErrorApi={setErrorApi}
                            {...props}
                        />
                    )
                }
            </>
        )
    }
}