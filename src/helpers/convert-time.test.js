import convertTime from './convert-time';

describe('convertTime', () => {
  it('should convert time and return readable result', () => {
    expect(convertTime('PT15M')).toEqual('15 minutes');
    expect(convertTime('pt35m')).toEqual('35 minutes');
    expect(convertTime(' pt35m ')).toEqual('35 minutes');
    expect(convertTime(' pt35m')).toEqual('35 minutes');
    expect(convertTime('pt35m ')).toEqual('35 minutes');
  });

  it('should convert return default value', () => {
    const defaultValue = 'Not specified';
    expect(convertTime('')).toEqual(defaultValue);
    expect(convertTime(12)).toEqual(defaultValue);
    expect(convertTime('Some text')).toEqual(defaultValue);
  });
});
