// タイプ'import...from'を直接使用しないように指定する
type RootState = ReturnType<typeof import("@/store").getState>;