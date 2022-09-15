/*Esta paguina contendra solo las rutas de las paguinas del sitio */

/*importa Router desde express */
import{ Router } from 'express';

const router = Router();

/*crea ruta pra cuando se solicite get y reenviarlo a la direccion */
router.get('/', (req, res) => res.render('index', {title: 'Inicio'}));
router.get('/about', (req, res) => res.render('about',{title: 'About'}));
router.get('/contact', (req, res) => res.render('contact', {title: 'Contact'}));



/*Para unir esta paguina con la index principar hay que exportarla */
export default router;