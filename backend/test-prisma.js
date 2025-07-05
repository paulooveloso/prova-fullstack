// test-prisma.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando teste de conexão e contagem...');
  try {
    const total = await prisma.vehicle.count();
    console.log(`✅ Teste bem-sucedido! Total de veículos no banco: ${total}`);
  } catch (error) {
    console.error('❌ ERRO NO TESTE:', error);
  } finally {
    // Garante que a conexão com o banco será encerrada
    await prisma.$disconnect();
    console.log('Conexão com o banco de dados encerrada.');
  }
}

// Executa a função principal
main();