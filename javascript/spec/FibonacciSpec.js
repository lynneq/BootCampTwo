describe('fibonacci',function(){
  it('give even fibonacci numbers sum back',function(){
    expect(getEvenFibsSum(f(4000000))).toBe(4613732);
  });
});