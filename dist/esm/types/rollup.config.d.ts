declare const _default: ({
    input: string;
    output: {
        file: any;
        format: string;
        sourcemap: boolean;
    }[];
    plugins: import("rollup").Plugin[];
} | {
    input: string;
    output: {
        file: string;
        format: string;
    }[];
    plugins: import("rollup").Plugin[];
})[];
export default _default;
