import { css } from 'lit';

export const scss = (strings, ...values) => {
    const result = css(strings, ...values);
    return result;
}