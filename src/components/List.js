import React, { useContext } from 'react';
import Context from '../store/context';

const List = () => {
    const { state } = useContext(Context);

    return (
        <>
            <h3>{ state.value }</h3>
        </>
    );
};

export default List;