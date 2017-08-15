/*
1: Assign the 'mage' variable an object literal ...

the mage has :

* a name (string)

* lvl (number)

* exp (number)

* hp (number)

* spells (object)

*/

var mage = {};
/****************** Your Solution ******************/
mage.name = "Mr. Mage";
mage.lvl = 1;
mage.exp = 1;
mage.hp = 10;
mage.spells = {};
/***************************************************/

/*
2 : Assign the 'mage' object a method named 'learnSpell' ...

'learnSpell' takes one argument, an object.

Validate that the value provided is an object. If the object's 'requiredLvl'
property stores a value less than or equal to your mage's current level, add it
to the mage's 'spells' object and return the string 'I have learned {name}.',
where {name} is the object's name property. Otherwise, return the string 'I do
not yet possess the power to learn this.'
*/

/****************** Your Solution ******************/
mage.learnSpell = function(someObject) {
  var spellName = someObject.name;

  if (someObject.requiredLvl <= this.lvl && typeof someObject == "object") {
    this.spells[spellName] = someObject;
    return "I have learned " + someObject.name + ".";
  }
  else {
    return "I do not yet possess the power to learn this.";
  }
}
/***************************************************/

/*
3 : Assign the 'magicMissile' variable an object literal ...

'magicMissile' represents a spell and has the following properties:

* type (string) (attack)

* name (string) (Magic Missile)

* requiredLvl (number) (1)
*/

var magicMissile = {};
/****************** Your Solution ******************/
magicMissile.type = "attack";
magicMissile.name = "Magic Missile"
magicMissile.requiredLvl = 1;
/***************************************************/

/*
4 : Add a method to 'magicMissile' named 'resolve' ...

'resolve' takes two arguments:

* the first argument is the object casting the spell (this will be your mage)

* the second argument will be the target of the spell (a foe) as an object

Randomly determine how much damage is done to the foe by multiplying the caster's
lvl by a whole number between 4-7. Subtract this amount from the foe's hp property.
Return the amount of damage done (a number).
*/

/****************** Your Solution ******************/
magicMissile.resolve = function(caster, target) {
  var damageDone = caster.lvl * parseInt((4 + Math.random() * 4));
  target.hp -= damageDone;
  return damageDone;

};
/***************************************************/

/*
5 : Add a method to 'mage' named 'castSpell' ...

'castSpell' takes two arguments:

* the first argument is a string (the name of the spell)

* the second argument will be the target of the spell (a foe) as an object

If the mage knows the spell (the name of the spell exists in the 'spells' object),
return the result of that spell's 'resolve' function after passing it the mage,
and the foe as arguments. If the mage does not know the spell, return the string
"I don't know that spell."
*/

/****************** Your Solution ******************/
mage.castSpell = function(spellName, target) {
  if (mage.spells[spellName]) {
    return this.spells[spellName].resolve(this, target);
  } else {
    return "I don't know that spell.";
  }
};
/***************************************************/

/*
6 : Have your mage learn 'magicMissile' ...
*/

/****************** Your Solution ******************/
mage.learnSpell(magicMissile);
/***************************************************/


/*
7 : Assign the 'darkness' variable an object literal representing an opponent ...

The opponent has 2 properties :

* 'hp' a number

* 'name' a string
*/

var darkness = {};
/****************** Your Solution ******************/
darkness.hp = 10;
darkness.name = "The Darkness";
/***************************************************/

/*
8 : Have your mage cast Magic Missile at the darkness ...
*/
/****************** Your Solution ******************/
mage.castSpell("Magic Missile", darkness);
/***************************************************/
