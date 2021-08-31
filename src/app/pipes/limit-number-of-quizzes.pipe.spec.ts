import { LimitNumberOfQuizzesPipe } from './limit-number-of-quizzes.pipe';

describe('LimitNumberOfQuizzesPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitNumberOfQuizzesPipe();
    expect(pipe).toBeTruthy();
  });
});
