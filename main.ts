namespace SpriteKind {
    export const lava = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.coolRadial, 500)
    mySprite.startEffect(effects.warmRadial, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.splash("you got out of the reaf", ":]")
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.coolRadial, 500)
    mySprite.startEffect(effects.warmRadial, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.splash("you went into the lava", "so you are dead")
    game.over(false, color.RotatePalette)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.coolRadial, 500)
    mySprite.startEffect(effects.warmRadial, 500)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.coolRadial, 500)
    mySprite.startEffect(effects.warmRadial, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.showLongText("hello there is  big smile made out of lava can you get though", DialogLayout.Bottom)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(5)
game.showLongText("hello player your sadly stuck in a reaf i hope you find a way out", DialogLayout.Center)
let players_speed = 100
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 8 9 8 . . . . . . . 
    . . . . . 8 6 9 6 8 . . . . . . 
    . . . . 8 9 9 9 9 9 8 . . . . . 
    . . . . . 8 6 9 6 8 . . . . . . 
    . . . . . . 8 9 8 . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`portal tile`)
controller.moveSprite(mySprite, players_speed, players_speed)
mySprite.ay = 500
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 8 9 8 . . . . . . . 
    . . . . . 8 6 9 6 8 . . . . . . 
    . . . . 8 9 9 9 9 9 8 . . . . . 
    . . . . . 8 6 9 6 8 . . . . . . 
    . . . . . . 8 9 8 . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 4 2 . . . . . . . 
    . . . . . 2 5 4 5 2 . . . . . . 
    . . . . 2 4 4 4 4 4 2 . . . . . 
    . . . . . 2 5 4 5 2 . . . . . . 
    . . . . . . 2 4 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . c a c . . . . . . . 
    . . . . . c b a b c . . . . . . 
    . . . . c a a a a a c . . . . . 
    . . . . . c b a b c . . . . . . 
    . . . . . . c a c . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . 7 6 7 . . . . . . . 
    . . . . . 7 5 6 5 7 . . . . . . 
    . . . . 7 6 6 6 6 6 7 . . . . . 
    . . . . . 7 5 6 5 7 . . . . . . 
    . . . . . . 7 6 7 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f d f . . . . . . . 
    . . . . . f 1 d 1 f . . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . . f 1 d 1 f . . . . . . 
    . . . . . . f d f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 2 3 . . . . . . . 
    . . . . . 3 4 2 4 3 . . . . . . 
    . . . . 3 2 2 2 2 2 3 . . . . . 
    . . . . . 3 4 2 4 3 . . . . . . 
    . . . . . . 3 2 3 . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 a 3 . . . . . . . 
    . . . . . 3 c a c 3 . . . . . . 
    . . . . 3 a a a a a 3 . . . . . 
    . . . . . 3 c a c 3 . . . . . . 
    . . . . . . 3 a 3 . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . 4 5 4 . . . . . . . 
    . . . . . 4 2 5 2 4 . . . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . . . 4 2 5 2 4 . . . . . . 
    . . . . . . 4 5 4 . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . a . . . . . . . . 
    . . . . . . a b a . . . . . . . 
    . . . . . a c b c a . . . . . . 
    . . . . a b b b b b a . . . . . 
    . . . . . a c b c a . . . . . . 
    . . . . . . a b a . . . . . . . 
    . . . . . . . a . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
true
)
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("E F G A B C5 B G ", 100)
    music.playMelody("G A B G - C5 A B ", 200)
    music.playMelody("C5 B C5 B C5 G C5 E ", 300)
    music.playMelody("E B C5 A B G A F ", 400)
    music.playMelody("A F E F D G E F ", 500)
    music.playMelody("A F E F D G E F ", 700)
    music.playMelody("C5 E C5 E C5 E C5 E ", 1000)
    music.playMelody("C B F - G B G - ", 500)
    music.playMelody("A - C5 D G B C5 E ", 100)
})
