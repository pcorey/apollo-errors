import ExtendableError from 'extendable-error';
export interface ErrorConfig {
    message: string;
    time_thrown?: string;
    data?: any;
    options?: any;
}
export interface ErrorInfo {
    message: string;
    name: string;
    time_thrown: string;
    data: string;
    path: string;
    locations: string;
}
export declare class ApolloError extends ExtendableError {
    name: string;
    message: string;
    time_thrown: string;
    data: any;
    path: any;
    locations: any;
    _showLocations: boolean;
    constructor(name: string, config: ErrorConfig);
    serialize(): ErrorInfo;
}
export declare const isInstance: (e: any) => boolean;
export declare const createError: (name: string, config: ErrorConfig) => ApolloError;
export declare const formatError: (error: any, returnNull?: boolean) => ErrorInfo;
