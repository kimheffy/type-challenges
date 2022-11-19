// Original template 
// type MyPick<T, K> = any;

// My solution:
type MyPick<Type, Keys> = {
    [Property in keyof Type as Extract<Property, Keys>]: Type[Property]
};
