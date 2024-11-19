/**
 * 각 인터페이스가 다른 데이터 유형이므로 파일 분리
 */
// tag 값으로 1, 2, 3을 받을 수 있는 유니언 타입
type Tag = 1 | 2 | 3;

export interface Advice {
    author?: string;         // 말한 사람의 이름
    authorProfile?: string;  // 말한 사람의 직업 or 별칭
    message: string;        // 말한 내용
    tag?: Tag;               // tag는 1, 2, 3 중 하나
}
