// Creates interval for specified delay

import { useEffect, useRef } from 'react';

export const useInterval = ( callback: () => void, delay: number | null ) => {
    const savedCallback = useRef( callback );

    // Remember the latest callback.
    useEffect( () => {
        savedCallback.current = callback;
    }, [ callback ] );

    // Set up the interval.
    useEffect( () => {
        if ( delay !== null ) {
            const id = setInterval( () => savedCallback.current(), delay )
            return () => clearInterval( id ); // cleanup
        }
    }, [ delay ] );
}