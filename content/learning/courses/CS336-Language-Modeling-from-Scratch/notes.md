## Lecture 1: Overview and Tokenization

landscape:

- pre neural(before 2010s)
  - ngram
- neural network(2010s)
  - seq2seq
  - adam
  - attention & transformer
  - moe
  - DP & TP
- foundation models(late 2010s)
  - Elmo & Bert & T5
  - scaling & RL scaling: GPT & deepseek

tokenizer:choose BPE(2015), popular

what it do: turn Unicode into Integer

- why not character-based? big vocab size, rare character waste space and discrete semantic
- why not byte-based? 256 vocab size, but compress ratio is low - long seq
- why not word-based? unbound vocab size

BPE: text seq -> byte seq(eg., UTF-8) -> merge adj byte
