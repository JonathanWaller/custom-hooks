import { useEffect, useState, useCallback } from 'react';

export const useContainerDimensions = ( myRef ) => {

    const getDimensions = useCallback( () => ( {
        containerWidth: myRef.current.offsetWidth
        , containerHeight: myRef.current.offsetHeight
    } ), [ myRef ] )
  
    const [ dimensions, setDimensions ] = useState( { containerWidth: 0, containerHeight: 0 } )
  
    useEffect( () => {
        const handleResize = () => {
            setDimensions( getDimensions() )
        }
  
        if ( myRef.current ) {
            setDimensions( getDimensions() )
        }
  
        window.addEventListener( 'resize', handleResize )
  
        return () => {
            window.removeEventListener( 'resize', handleResize )
        }
    // keep myRef.current below!
    }, [ myRef, myRef.current, getDimensions ] )
  
    return dimensions;
};