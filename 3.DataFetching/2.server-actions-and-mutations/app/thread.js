'use client'

import { useOptimistic } from 'react';
import { create } from './actions';
import { SubmitButton } from './button';

export function Thread({ todos, userId }) {
    const createAction = create.bind(null, userId);
    const [optimisticTodos, setOptimisticTodos] = useOptimistic(
        todos,
        (state, newTodo) => [...state, newTodo]
    )
    return (
        <>
            <form action={async (formData) => {
                const work = formData.get("work");
                const data = {work: work, userId: userId, isCreated: false}
                setOptimisticTodos(data);
                await createAction(formData)
            }}>
                <div>
                    <label>Work</label>
                    <input name="work" />
                </div>
                <div>
                    <SubmitButton name="Save" />
                </div>
            </form>
            <hr />
            <ul>
                {optimisticTodos.map((val, i) => <li key={i}>
                    {val.work} 
                    <smal><b>
                        {!val.isCreated ? 'Being created...' : ''}
                    </b></smal>
                    </li>)}
            </ul>
        </>
    )
}