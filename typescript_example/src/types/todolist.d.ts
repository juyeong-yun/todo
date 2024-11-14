// ./types/todolist.d.ts
/**
 * .d.ts 파일은 타입 정의 파일을 말한다.
 * 파일 내부의 타입은 local module 이며, 타입 정의만 넣을 수 있다.
 * 기존 자바스크립트로 만들어진 서드파티 모듈들을 타입스크립트에서도
 * 사용할 수 있도록 따로 타입만 정리해서 넣어둔 파일이라도 생각하면 된다.
 */
export interface todolist {
    id : number;
    todo : string;
    date : Date;
    clear : Boolean;
}