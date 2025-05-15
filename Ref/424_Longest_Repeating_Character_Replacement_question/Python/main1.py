from input2 import s, k

print(s)
print(k)

count = {}
ans = 0

l = 0
max_count = 0

for r in range(len(s)):
    count[s[r]] = 1 + count.get(s[r], 0)
    max_count = max(max_count, count[s[r]])

    while (r - l- 1) - max_count > k:
        count[s[l]] -= 1
        l += 1
    ans = max(ans, r - l - 1)

print(ans)


