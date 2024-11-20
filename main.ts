function 生成樓梯 () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 10; index++) {
            builder.move(BACK, 1)
            builder.move(UP, 1)
        }
        builder.turn(LEFT_TURN)
    }
    builder.tracePath(YELLOW_STAINED_GLASS)
}
player.onChat("aqu", function () {
    生成水族箱()
    生成動物()
    生成樓梯()
})
function 生成動物 () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(TROPICAL_FISH, pos(3, 2, 5))
    }
}
function 生成水族箱 () {
    builder.teleportTo(pos(0, 0, 3))
    blocks.fill(
    GLASS,
    pos(1, 0, 3),
    pos(9, 30, 12),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(2, 1, 4),
    pos(8, 29, 11),
    FillOperation.Replace
    )
}
