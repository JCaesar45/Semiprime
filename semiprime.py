def is_semiprime(n: int) -> bool:
    if not isinstance(n, int) or n < 4:
        return False
    count = 0
    num = n
    i = 2
    while i * i <= num:
        while num % i == 0:
            num //= i
            count += 1
            if count > 2:
                return False
        i += 1
    if num > 1:
        count += 1
    return count == 2


if __name__ == "__main__":
    assert is_semiprime(4) is True
    assert is_semiprime(46) is True
    assert is_semiprime(74) is True
    assert is_semiprime(95) is True
    assert is_semiprime(1679) is True
    assert is_semiprime(100) is False
    assert is_semiprime(504) is False
    assert is_semiprime(13) is False
    assert is_semiprime(2) is False
    assert is_semiprime(124) is False
    print("all tests passed")
