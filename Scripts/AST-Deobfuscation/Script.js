const fs = require('fs');
const escodegen = require('escodegen');
const estraverse = require('estraverse');

function loadAST(filePath) {
    try {
        const jsonContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(jsonContent);
    } catch (error) {
        console.error('Erreur lors du chargement du fichier JSON:', error);
        return null;
    }
}

function cleanAST(ast) {
    return estraverse.replace(ast, {
        enter: function(node) {
            if (typeof node !== 'object' || !node.type) {
                return estraverse.VisitorOption.Remove;
            }
            // Gérer le type de nœud inconnu
            if (node.type === 'jaajajajajajajajajajajajaj') {
                console.warn('Nœud inconnu trouvé et supprimé:', node.type);
                return estraverse.VisitorOption.Remove;
            }
        }
    });
}

function deobfuscateAST(ast) {
    return estraverse.replace(ast, {
        enter: function(node) {
            // Votre logique de déobfuscation ici
        }
    });
}

function generateCode(ast) {
    try {
        return escodegen.generate(ast);
    } catch (error) {
        console.error('Erreur lors de la génération du code:', error);
        return null;
    }
}

function main() {
    const filePath = '/home/romso/Téléchargements/ch38.json'; // CHANGE PATH
    let ast = loadAST(filePath);
    
    if (!ast) {
        console.error("Impossible de charger l'AST. Arrêt du programme.");
        return;
    }

    console.log('AST original chargé');

    ast = cleanAST(ast);
    console.log('AST nettoyé');

    const deobfuscatedAST = deobfuscateAST(ast);
    console.log('AST déobfusqué');

    const deobfuscatedCode = generateCode(deobfuscatedAST);
    if (deobfuscatedCode) {
        console.log('Code déobfusqué:');
        console.log(deobfuscatedCode);
        
        fs.writeFileSync('deobfuscated_code.js', deobfuscatedCode);
        console.log('Code déobfusqué sauvegardé dans deobfuscated_code.js');
    } else {
        console.error("Impossible de générer le code déobfusqué.");
    }
}

main();
