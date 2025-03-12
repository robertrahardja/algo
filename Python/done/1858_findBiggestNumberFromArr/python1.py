li = [50, 1, 2, 8]

# largest possible number in list
res = sorted(
    li,
    # multiply by 10 to handle variable lengths properly
    key=lambda x: str(x) * 10,
    reverse=True,
)
print("".join(map(str, res)))  # Output: "85021"
