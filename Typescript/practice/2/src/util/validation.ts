export interface Validation {
  value: string | number;
  require?: boolean;
  maxlength?: number;
  minlength?: number;
  max?: number;
  min?: number;
}

// 검증 재사용 함수
export function validate(obj: Validation): boolean {
  let validValue = true;
  // 입력 했는지
  if (obj.require) {
    validValue = obj.require && !!obj.value;
  }
  // 최대 길이 이하인지
  if (typeof obj.value === 'string' && obj.maxlength) {
    validValue = obj.maxlength >= obj.value.trim().length;
  }
  // 최소 길이 이상인지
  if (typeof obj.value === 'string' && obj.minlength) {
    validValue = obj.minlength <= obj.value.trim().length;
  }
  // 숫자가 최대 이하인지
  if (typeof obj.value === 'number' && obj.max) {
    validValue = obj.max >= obj.value;
  }
  // 숫자가 최소 이상인지
  if (typeof obj.value === 'number' && obj.min) {
    validValue = obj.min <= obj.value;
  }
  return validValue;
}
