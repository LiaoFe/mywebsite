import NavBar from '../components/NavBar'
import JavaLogo from '../images/java-icon.png'
import {Container, Stack, Card } from 'react-bootstrap'
import Witcher3 from '../images/witcher3.jpg'
import ACO from '../images/ACodyssey.jpg'
import './blog.css'
const ReviewCard = (props) => {
    return (
        
            <Card className='m-auto w-75 mb-3' bg='secondary' id="customcards">
                <Card.Text className="m-auto h2 mb-3" >{props.name}</Card.Text>
                <Card.Img variant="top" src={props.img} />
                <Card.Text className='fst-italic m-auto' id="size">image source: <a id="size" href={props.source} target="_blank">
                    {props.source} </a>
                </Card.Text>
                <Card.Body>
                <Card.Text id="text">
                    {props.children}
                </Card.Text>
                </Card.Body>
            </Card>
        
    );
}

function Blog(){
    return(
        <Container fluid> 
        <Container fluid className='m-auto mb-0 mt-5 pt-5' id="/">
            <Card.Text  className='m-auto text-center h1 mb-4'>Welcome to Felix's Video Game Review Blog</Card.Text >
            <Card.Text className='m-auto text-center h5 mt-2 mb-4'> This page is under development. As I play more games, I will update this blog. </Card.Text>
            <Card.Text></Card.Text>
            <Card.Text className='m-auto text-center h5'>Thank you for visiting my blog. Enjoy! </Card.Text>
        </Container>
        <Container fluid id="witcher3" >
            <ReviewCard img={Witcher3} name="The Witcher 3: Wild Hunt" source="https://www.polygon.com/features/2014/7/16/5884227/cd-projekt-the-witcher-3" >
                The Witcher 3: Wild Hunt was one of the best single player, adventure RPG games I have ever played.
                This game features rich gameplay and has 2 additional DLCS. This game was dubbed Game of The Year and Best RPG game in 2015.
                The base game features around 40-50 hours of gameplay, depending on your speed. The Heart of Stone DLC adds about another 10 hours and the Blood and Wine DLC adds about 50 more.
                The story follows Geralt of Rivia and his adventures in finding Ciri after the events of Witcher 2.
                <p></p>
                Moving on to the inner details, the game has intensive combat mechanics. The addition of signs, alchemy, and abilities allows for the player to choose 
                a combination of fighting techniques. Mutations, potions, oils, and monster weaknesses add another dimension of combat when it comes to optimizing your damage output
                against harder mobs. I love how the game has 4 difficulty levels. The first 2 difficulties, Just the Story (easy) and
                Sword and Story (normal), feature a mechanic where the player can regenerate health by meditating (a mechanic to speed up time and regenerate potions).
                The harder 2, Blood and Broken Bones (hard) and Death March (insane) takes away the regeneration mechanic via meditation. The enemies have incredebly more health and do immense damage.
                I could these difficulty levels to make the game feel more realistic toward the Netflix adaptation of this series and adds a bit more flavour to the game by encouraging the player
                to optimize their combat through crafting items and captilalizing on their skill tree.
                <p></p>
                Regarding the graphics of this game, I must say they are amazing for a game made in 2016. There are some weird animations and rendering issues during cutscenes or when the player is running up odd terrain, but 
                these effects are usually humourous and does not hinder gameplay.
                The main characters in the game are very personality rich. I like the element of romance in the game as well. Of course, I am team Yennefer when it comes to
                the Witcher series, however, I found both characters to be very developed in this game. There are side quests which explore both of Geralt's main romances, that being Triss and Yennefer.
                The player is allowed to romance either or both which is always a nice feature for those curious gamers.
                <p></p>
                Lastly, I really enjoyed the exploration aspect of the game. The map is very large littered with hidden side quests and treasures. Exploring the map for hours is, in itself, a very 
                fun experience. Going on scavenger hunts to find witcher gear sometimes lead to exploring caves, abandoned houses, and occassionally a side quest which introduces new areas with more quests.
                I would heavily recommend this game for those adventure loving gamers who like a rich story as well as a in depth combat system.
                <p></p>
                <br></br>
                Overall 10/10 game
            </ReviewCard>
            </Container>
            <Container fluid id="ac-odyssey" >
            <ReviewCard img={ACO} name="Assassin's Creed: Odyssey" source="https://www.pcgamesn.com/assassins-creed-odyssey" >
                AC Odyssey was an action packed aventure RPG with an open world map. Similar to Witcher 3, the game was story rich. There are levels, quests, and item collecting in this game as well.
                The graphics are AMAZING as it is a fairly new game. I love the cinematic views of ancient Greece. Everwhere I go, I have material to screenshot. This game is simply beautiful. 

                The story follows Alexios or Kassandra and their avdentures relating to location of the Staff of Hermes Trismegistus. 

                <p></p>

                First of all, I appreciate how Ubisoft allowed for the player to choose a gender in attempts to include female protagonists in their games. This is in response to some critisism of their games
                only featuring male protagonists. The choice of either Alexios (male) or Kassandra (female) does not affect the gameplay by much, only their voice acting.

                <p></p>
                Next, the game's fighting mechanic is pretty straight forward. I basically played the whole game by dodging and spamming heavy attack, which becomes numbing after a while. Luckily there 
                are many different types of weapons which have unique attack styles. This made looking for new weapons more rewarding and refreshed the combat aspect every once in a while.

                <p></p> I like the story. Mainly because I am a fan of greek mythology and the setting of the game. Exploring tombs, killing mythical creatures, assassinating politicials made the Story
                very enjoyable. I love the bird's eye view mechanic. The player has a golden eagle companion called Ikaros. Players can control the eagle and find enemies from the eagle's perspective. 
                This added an extra element of stealth and recon which I found unique.

                <p></p>
                The exploration of the map was pretty harsh. The beautiful cinematics made it endurable. Lot's of times, you would be underleveled and force to grind tedious side quests before being able to 
                explore the map conviniently. Lot's of times I found myself grinding side quests in order to be able to do story missions and thus there was not enough time to explore. Some areas seem too crowded
                so that riding your horse around was not the best experience. 
                
                In summary, the game is mainly features its graphics andcinematic views. I do wish the combat was a bit more complex and that the leveling system was not so cruel.
                It has been a while since I played this game and I would only replay this game if there were a shortage of new games coming to the market in that year.
                <p></p>
                <br></br>
                Overall 8/10
            </ReviewCard>
        </Container>
        </Container>
    );
}

export default Blog