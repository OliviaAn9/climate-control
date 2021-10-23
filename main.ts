controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (penguin.vy == 0) {
        penguin.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false, effects.bubbles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let fire: Sprite = null
let fish: Sprite = null
let penguin: Sprite = null
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777731777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773331177777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333111111111777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333111111111171177117777777777777777777777777777777
    7777777777777777777777777777777777777777711111777777777777777777777777777777777777777777777777777777777777773331111111111111111111177777777777777777777777777777
    7777777777777777777777777777777777777773311111117777777777777777777777777777777777777777777777777777777777733311111111111111111111111777777777777777777777777777
    7777777777777777777777777777777777777733111111117777777777777777777777777777777777777777777777777777777777733111111111111111111111111777777777777777777777777777
    7777777777777777777777777777777777773331111111111777777777777777777777777777777777777777777777777777777773333111111111111111111111117777777777777777777777777777
    7777777777777777777777777777777777333311111111111771111177777777777777777777777777777777777777777777777733333333333133111111117777777777777777777777777777777777
    7777777777777777777777777777777773333111111111111111111117777777777777777777777777777777777777777777777733333333333333177777777777777777777777777777777777777777
    7777777777777777777777777777733373311111111111111111111117777777777777777777777777777777777777777777777733337337777777777777777777777777777777777777777777777777
    7777777777777777777777777777333333111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777773333333111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777773333333311111111111111111111111117111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777733333111111111111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777333331111111111111111111111111111111111111177111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777333111111111111111111111111111111111111111171111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777333111111111111111111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777773331111111111111111111111111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777733311111111111111111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777773333111111111111111111111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777733333311111111111111111111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777733333333111111111111111111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777733333333313333311111111111111111111111111111111117711111177111177777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777733333333333333333333333333111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777733333333333333333333333773331111771111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777333337333777777777777777733177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771111111177777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773331111111177777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333311111111177777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733331111111111777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333331111111111777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333111111111117777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733331111111111177777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333111111111111177777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333111111111111177777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773331111111111111177777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773311111111111111777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333111111111111111777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733333111111111111111777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333331111111111111117777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333311111111111111117777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333111111111111111117777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733331111111111111111117777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333311111111111111111177777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333311111111111111111177777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333311111111111111111177777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333111111111111111111177777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333331111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333311111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733333311111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333333111111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333331111111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733333111111111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333331111111111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333331111111111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733333311111111111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333333111111111111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333331111111111111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733333331111111111111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733333331111111111111111111111111111777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333333311111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333333111111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333311111111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733331111111111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733311111111111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333111111111111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333111111111111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333331111111111111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333311111111111111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733333111111111111111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333331111111111111111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333311111111111111111111111111111111111111117777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777733333311111111111111111111111111111111111111177777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333333111111111111111111111111111111111111111177777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777333333111111111111111111111111111111111111111177777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777773333331111111111111111111111111111111111111111177777777777777777777777777
    `)
penguin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f . . . . 
    . . . . . . . f f 1 1 f f . . . 
    . . . . . . . f 1 1 f 1 f 4 . . 
    . . . . . . . f f 1 1 1 f . . . 
    . . . . . . . f f f f f . . . . 
    . . . . . . f f f e e e . . . . 
    . . . . . f f f f e e e e . . . 
    . . . . f f f f f e e e e . . . 
    . . f f f f f f f e e e e . . . 
    . . . f f f f f e e e e e . . . 
    . . . . f f e e e e e e e . . . 
    . . . f f e e e e e e e . . . . 
    . . . . f f e e 4 4 4 4 4 . . . 
    `, SpriteKind.Player)
controller.moveSprite(penguin, 100, 0)
tiles.setTilemap(tilemap`level4`)
penguin.ay = 400
scene.cameraFollowSprite(penguin)
info.setScore(0)
info.setLife(3)
for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
    fish = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . c c c c 1 b c . . . . . 
        . . . c 1 b b d c b c . . c c . 
        . . c 1 b f d b d c c . c 1 c . 
        . . c 1 b f d b a d d c 1 b c . 
        . . c d b f d b a b b b b c . . 
        . . c d b b b a a b b c a b c . 
        . . . c c c c c c c c . c c c . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    animation.runImageAnimation(
    fish,
    [img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . 
        . . . c c c c 1 b c . . . . . 
        . . c 1 b b d c b c . . c c . 
        . c 1 b f d b d c c . c 1 c . 
        . c 1 b f d b a d d c 1 b c . 
        . c d b f d b a b b b b c . . 
        . c d b b b a a b b c a b c . 
        . . c c c c c c c c . c c c . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . 
        . . . . c c c 1 b c . . . . . 
        . . . c 1 b d c b c . c c . . 
        . . c 1 b f b d c c c 1 c . . 
        . . c 1 b f b a d d 1 b c . . 
        . . c d b f b a b b b c . . . 
        . . c d b b a a b b a b c . . 
        . . . c c c c c c c c c c . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . 
        . . . . . . c c b c . . . . . 
        . . . . . c 1 b b c c . . . . 
        . . . . c 1 b f c 1 c . . . . 
        . . . . c 1 b f d b c . . . . 
        . . . . c d b f b c . . . . . 
        . . . . c d b b b b c . . . . 
        . . . . . c c c c c c . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . 
        . . . . . . . c c . . . . . . 
        . . . . . . c b c c . . . . . 
        . . . . . c 1 f 1 c . . . . . 
        . . . . . c 1 f b c . . . . . 
        . . . . . c d f c . . . . . . 
        . . . . . c d b b c . . . . . 
        . . . . . . c c c c . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . 
        . . . . . . . c . . . . . . . 
        . . . . . . . b c . . . . . . 
        . . . . . . c f c . . . . . . 
        . . . . . . c f c . . . . . . 
        . . . . . . c f . . . . . . . 
        . . . . . . c b c . . . . . . 
        . . . . . . . c c . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . 
        . . . . . . c c c . . . . . . 
        . . . . . c c b c c . . . . . 
        . . . . . c 1 f 1 c . . . . . 
        . . . . . c b f 1 c . . . . . 
        . . . . . . c f d c . . . . . 
        . . . . . c b b d c . . . . . 
        . . . . . c c c c . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . c c c . . . . . . . 
        . . . . . c b c c . . . . . . 
        . . . . c c b b 1 c . . . . . 
        . . . . c 1 c f d 1 c . . . . 
        . . . . c b d f d 1 c . . . . 
        . . . . . c b f d d c . . . . 
        . . . . c b b b d d c . . . . 
        . . . . c c c c c c . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . c c c . . . . . . . 
        . . . . . c b c c c . . . . . 
        . . . c c c b d b 1 c . . . . 
        . . . c 1 c c b f b 1 c . . . 
        . . . c b d d b f b 1 c . . . 
        . . . . c b b b f b d c . . . 
        . . . c b b b a b b d c . . . 
        . . . c c c c c c c c . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . c c c . . . . . . . 
        . . . . . c b 1 c c c . . . . 
        . . c c . c b c d b 1 c . . . 
        . . c 1 c c c d b f b 1 c . . 
        . . c b 1 d d a b f b 1 c . . 
        . . . c b b b a b f b d c . . 
        . . c b a b b a a b b d c . . 
        . . c c c c c c c c c c . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . c c c . . . . . . . 
        . . . . . c b c c c . . . . . 
        . . . c c c b d b 1 c . . . . 
        . . . c 1 c c b f b 1 c . . . 
        . . . c b d d b f b 1 c . . . 
        . . . . c b b b f b d c . . . 
        . . . c b b b a b b d c . . . 
        . . . c c c c c c c c . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . c c c . . . . . . . 
        . . . . . c b c c . . . . . . 
        . . . . c c b b 1 c . . . . . 
        . . . . c 1 c f d 1 c . . . . 
        . . . . c b d f d 1 c . . . . 
        . . . . . c b f d d c . . . . 
        . . . . c b b b d d c . . . . 
        . . . . c c c c c c . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . 
        . . . . . . c c c . . . . . . 
        . . . . . c c b c c . . . . . 
        . . . . . c 1 f 1 c . . . . . 
        . . . . . c b f 1 c . . . . . 
        . . . . . . c f d c . . . . . 
        . . . . . c b b d c . . . . . 
        . . . . . c c c c . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . 
        . . . . . . . c . . . . . . . 
        . . . . . . . b c . . . . . . 
        . . . . . . c f c . . . . . . 
        . . . . . . c f c . . . . . . 
        . . . . . . c f . . . . . . . 
        . . . . . . c b c . . . . . . 
        . . . . . . . c c . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . 
        . . . . . . . c c . . . . . . 
        . . . . . . c b c c . . . . . 
        . . . . . c 1 f 1 c . . . . . 
        . . . . . c 1 f b c . . . . . 
        . . . . . c d f c . . . . . . 
        . . . . . c d b b c . . . . . 
        . . . . . . c c c c . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . 
        . . . . . . c c b c . . . . . 
        . . . . . c 1 b b c c . . . . 
        . . . . c 1 b f c 1 c . . . . 
        . . . . c 1 b f d b c . . . . 
        . . . . c d b f b c . . . . . 
        . . . . c d b b b b c . . . . 
        . . . . . c c c c c c . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . 
        . . . . . c c c b c . . . . . 
        . . . . c 1 b d b c c c . . . 
        . . . c 1 b f b c c 1 c . . . 
        . . . c 1 b f b d d b c . . . 
        . . . c d b f b b b c . . . . 
        . . . c d b b a b b b c . . . 
        . . . . c c c c c c c c . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(fish, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
    fire = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 . . . . 2 . . . . 
        . . . . . . . . . . 2 . . . . . 
        . . . . . . . . 2 2 4 2 . . . . 
        . . . . . . . 2 2 4 2 2 . . . . 
        . . . . . . 2 4 4 2 2 . . . . . 
        . . . . . . 2 2 4 5 2 . . . . . 
        . . . . . 2 2 4 4 4 2 2 . . . . 
        . . . . . 2 4 4 5 4 4 4 2 . . . 
        . . . . . 2 2 2 4 5 4 5 2 . . . 
        . . . . . . 2 5 5 4 5 2 2 . . . 
        . . . . . . 2 5 1 5 5 2 . . . . 
        . . . . . . . 5 1 1 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    fire,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 . . . . 2 . . . . 
        . . . . . . . . . . 2 . . . . . 
        . . . . . . . . 2 2 4 2 . . . . 
        . . . . . . . 2 2 4 2 2 . . . . 
        . . . . . . 2 4 4 2 2 . . . . . 
        . . . . . . 2 2 4 5 2 . . . . . 
        . . . . . 2 2 4 4 4 2 2 . . . . 
        . . . . . 2 4 4 5 4 4 4 2 . . . 
        . . . . . 2 2 2 4 5 4 5 2 . . . 
        . . . . . . 2 5 5 4 5 2 2 . . . 
        . . . . . . 2 5 1 5 5 2 . . . . 
        . . . . . . . 5 1 1 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 . . . . . 
        . . . . . . 4 . . 2 . . . . . . 
        . . . . . . . . 2 2 . . . . . . 
        . . . . . . . 2 2 4 2 . . . . . 
        . . . . . . 2 4 4 2 2 . . . . . 
        . . . . . . 2 2 4 5 2 . . . . . 
        . . . . . 2 2 4 4 4 2 2 . . . . 
        . . . . . 2 4 4 5 4 4 4 2 . . . 
        . . . . . 2 2 2 4 5 4 5 2 . . . 
        . . . . . . 2 5 5 4 5 2 2 . . . 
        . . . . . . 2 5 1 5 5 2 . . . . 
        . . . . . . . 5 1 1 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . 2 2 . 2 . . . . . 
        . . . . . . 2 4 4 2 . . . . . . 
        . . . . . . 2 2 4 5 2 . . . . . 
        . . . . . 2 2 4 4 4 2 2 . . . . 
        . . . . . 2 4 4 5 4 4 4 2 . . . 
        . . . . . 2 2 2 4 5 4 5 2 . . . 
        . . . . . . 2 5 5 4 5 2 2 . . . 
        . . . . . . 2 5 1 5 5 2 . . . . 
        . . . . . . . 5 1 1 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . . 2 2 . . 4 . . . . 
        . . . . . . . . 2 . 2 . . . . . 
        . . . . . 4 . 2 2 . . . . . . . 
        . . . . . . 2 4 4 2 2 . . . . . 
        . . . . . . 2 2 4 5 2 . . . . . 
        . . . . . 2 2 4 4 4 2 2 . . . . 
        . . . . . 2 4 4 5 4 4 4 2 . . . 
        . . . . . 2 2 2 4 5 4 5 2 . . . 
        . . . . . . 2 5 5 4 5 2 2 . . . 
        . . . . . . 2 5 1 5 5 2 . . . . 
        . . . . . . . 5 1 1 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(fire, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    penguin.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . f f 1 1 f f . . . 
        . . . . . . . f 1 1 f 1 f 4 . . 
        . . . . . . . f f 1 1 1 f . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . f f f e e e . . . . 
        . . . . . f f f f e e e e . . . 
        . . . . f f f f f e e e e . . . 
        . . f f f f f f f e e e e . . . 
        . . . f f f f f e e e e e . . . 
        . . . . f f e e e e e e e . . . 
        . . . f f e e e e e e e . . . . 
        . . . . f f e e 4 4 4 4 4 . . . 
        `)
    if (penguin.vy < 0) {
        penguin.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . f f . . f f 1 1 f f . . . 
            . . . f f f . f 1 1 f 1 f 4 . . 
            . . f f f f f f f 1 1 1 f . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f f f f e e e . . . . 
            . . . f f f f f e e e e e . . . 
            . . . . f f f e e e e e e . . . 
            . . f f f f e e e e e e e . . . 
            . . . f f e e e e e e e e . . . 
            . . . . f e e e e e e e e . . . 
            . . . f f e e e e e e e . . . . 
            . . . . f f e e 4 4 4 4 4 . . . 
            `)
    } else if (penguin.vy > 0) {
        penguin.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f f . . 
            . . . . . . . . . f f 1 1 f f . 
            . . . . . . . . . f 1 1 f 1 f 4 
            . . . . . f f f . f f 1 1 1 f . 
            . . . . f f f f f f f f f f . . 
            . . . f f f f f f e e e . . . . 
            . f f f f f f f e e e e . . . . 
            . . f f f f f e e e e e . . . . 
            . . . f f e e e e e e e . . . . 
            . . f f e e e e e e e . . . . . 
            . . . f f e e 4 4 4 4 4 . . . . 
            `)
    } else if (penguin.x % 2 == 0) {
        penguin.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . f f 1 1 f f . . . 
            . . . . . . . f 1 1 f 1 f 4 . . 
            . . . . . . . f f 1 1 1 f . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f f f e e e . . . . 
            . . . . . f f f f e e e e . . . 
            . . . . f f f f f e e e e . . . 
            . . f f f f f f f e e e e . . . 
            . . . f f f f f e e e e e . . . 
            . . . . f f e e e e e e e . . . 
            . . . f f e e e e e e e . . . . 
            . . . . f f e e 4 4 4 . . . . . 
            `)
    } else {
    	
    }
    if (penguin.vx < 0) {
        penguin.image.flipX()
    }
})
